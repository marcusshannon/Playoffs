const { List, Map, Set, OrderedSet } = require('immutable');
const moment = require('moment');
const SEASON = require('./SEASON.js');
const TEAMS = require('./TEAMS.js');

const past = SEASON.slice(0, 1052).map(game =>
  Map({ winner: game.get('winner'), loser: game.get('loser') })
);

const future = SEASON.slice(1052).map(game =>
  Map({ homeTeam: game.get('homeTeam'), awayTeam: game.get('awayTeam') })
);

let records = past.reduce(
  (records, result) =>
    records
      .update(result.get('winner'), (record = Map({ wins: 0, losses: 0 })) =>
        record.update('wins', wins => wins + 1)
      )
      .update(result.get('loser'), (record = Map({ wins: 0, losses: 0 })) =>
        record.update('losses', losses => losses + 1)
      ),
  Map()
);

records = records.map(record =>
  record.set('magic', 82 - record.get('wins') - records.getIn(['Phoenix Suns', 'losses']))
);

console.log('\nOriginal Post Phoenix Game Records');
records.forEach((record, team) => console.log(team, record));

const initalState = Map({ past, future, records, toProcess: OrderedSet(), processed: Set() });

const app = state => {
  if (
    state.get('records').filter(
      (record, team) => TEAMS.get(team).get('conference') === 'West' && record.get('magic') < 0
    ).size >= 8
  )
    console.log('8 TEAMS GUARENTEED BETTER, ELIMINATED');
  let newToProcess = state.get('toProcess');
  state.get('records').forEach((record, team) => {
    if (
      record.get('magic') == 0 &&
      !state.get('processed').has(team) &&
      TEAMS.get(team).get('conference') === 'West'
    ) {
      newToProcess = newToProcess.add(team);
    }
  });
  if (newToProcess.size == 0) {
    console.log(`\n Minimum tie - ${state.get('processed')}`)
    state.get('records').forEach((record, team) => console.log(team, record));
    return console.log('\nSTARTING COMPUTATION FOR TIE BREAK');
  }
  newToProcess.forEach(team => {
    console.log(`\nBEGIN SIMULATING LOSSES FOR ${team}`);
    let newRecords = state.get('records');
    state.get('future').filter(game => game.get('homeTeam') === team).forEach(game => {
      console.log(`${game.get('awayTeam')} WINS OVER ${team}`);
      newRecords = newRecords.update(game.get('awayTeam'), record => {
        return record.update('wins', wins => wins + 1).update('magic', magic => magic - 1);
      });
    });
    state.get('future').filter(game => game.get('awayTeam') === team).forEach(game => {
      console.log(`${game.get('homeTeam')} WINS OVER ${team}`);
      newRecords = newRecords.update(game.get('homeTeam'), record => {
        return record.update('wins', wins => wins + 1).update('magic', magic => magic - 1);
      });
    });
    const newFuture = state
      .get('future')
      .filterNot(game => game.get('homeTeam') === team || game.get('awayTeam') === team);
    const newPast = state
      .get('past')
      .concat(
        state
          .get('future')
          .filter(game => game.get('homeTeam') === team)
          .map(game => Map({ winner: game.get('awayTeam'), loser: team })),
        state
          .get('future')
          .filter(game => game.get('awayTeam') === team)
          .map(game => Map({ winner: game.get('homeTeam'), loser: team }))
      );
    const newProcessed = state.get('processed').add(team);
    console.log(`\nDONE SIMULATING LOSSES FOR - ${team}, NEW RECORDS:`);
    newRecords.forEach((record, team) => console.log(team, record));
    app(
      Map({
        past: newPast,
        future: newFuture,
        records: newRecords,
        toProcess: newToProcess.delete(team),
        processed: newProcessed
      })
    );
  });
};

app(initalState);
