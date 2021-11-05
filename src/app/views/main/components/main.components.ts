import { Component, OnInit } from '@angular/core';
import { Standings } from '../../../models/standings';
import { LeagueService } from '../../../services/league.services';
import { MatDialog } from '@angular/material/dialog';
import { TeamsStatsDialogComponent } from '../dialog.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  standings: Standings[];

  groupA: Standings [] =[];
  groupB: Standings[] = [];
  groupC: Standings[] = [];
  groupD: Standings[] = [];
  groupE: Standings[] = [];
  groupF: Standings[] = [];
  groupG: Standings[] = [];
  groupH: Standings[] = [];

  constructor(private standingService: LeagueService, public dialog: MatDialog) { }

  ngOnInit() {
    this.getStandings();
  }

  getStandings(): void {
    this.standingService.getStandings()
      .subscribe((stand: any) => {
        this.standings = stand.data.table;
        this.createGroups("A", this.groupA);
        this.createGroups("B", this.groupB);
        this.createGroups("C", this.groupC);
        this.createGroups("D", this.groupD);
        this.createGroups("E", this.groupE);
        this.createGroups("F", this.groupF);
        this.createGroups("G", this.groupG);
        this.createGroups("H", this.groupH);
      });   
  }

 openDialog(teamid: number): void {
    const dialogRef = this.dialog.open(TeamsStatsDialogComponent, {
      data: { pageValue: this.getTeamStatsByTeamId(teamid.toString()) }
    });
  }

  createGroups(groupName:string, groupArray: Standings[]) {
    for (var i = 0; i < this.standings.length; i++) {
      if (this.standings[i].group_name == groupName) {
        groupArray.push(this.standings[i]);
      }
    }
  }

  getTeamIcon(teamid: number) {

  }

  getTeamStatsByTeamId(teamId: string) {
    for (var i = 0; i < this.standings.length; i++) {
      if (this.standings[i].team_id == teamId) {
        return this.standings[i];
      }
    }
  }
}
