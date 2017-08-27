# Playoffs
The code written so far will compute the magic number for a team against every other team in the conference (with the caveat that the magic number formula is usually G + 1 − WA − LB, while we use G − WA − LB to allow ties.)

If there are 8 other teams with a negative magic number in the same conference, the team in question is eliminated.

If there are 7 other teams with magic numbers > 0, then that team is still in playoff contention.

The trickiness of the problem is introduced when there are magic numbers of 0 which means the the team in question can tie with another team.

A magic number of 0 means that that team must lose out in order for a tie to happen.

So the program will recursively 'simulate' the rest of that team's season and assign wins to the teams that it faces.

If there are more than one 0 magic number situation it will effectively create different 'timelines' where ordering of who loses matters. E.g. If the team in question is Brooklyn, and the two teams Brooklyn can tie with are Chicago and Detroit, then it will simulate Chicago losing out (giving Detroit a win and therefore impossible for Brooklyn to tie) and then it will simulate Detroit losing out (giving Chicago the win). 

Every timeline matters because it will give rise to other teams whose magic number might equal 0. If that happens then the program will recursively simulate losing out their seasons as well (taking into account the wins they got from the past magic number 0 teams)

After there is a cycle with no new magic numbers of 0 being added you get the minimum tie scenario(s). This is where in order to make the playoffs, these teams (the ones after simulating the season have a magic number of 0), are tied with the team in question. Then you would perform the tie breaking procedure based on the rules given. This part is not implemented yet though.
