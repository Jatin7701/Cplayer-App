import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StatOpenerComponent } from '../stat-opener/stat-opener.component';
import { CricapiService } from '../cricapi.service';
import { RouterService } from '../router.service';
import { Find } from '../find';
import { Favs } from '../fav';
import {PlayerStatisticsComponent} from 'src/app/player-statistics/player-statistics.component'
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-statview',
  templateUrl: './statview.component.html',
  styleUrls: ['./statview.component.css']
})
export class StatviewComponent implements OnInit {
  stat :any;
  constructor(private diaRef: MatDialogRef<StatOpenerComponent>,public dialog: MatDialog, @Inject(MAT_DIALOG_DATA) private data: any,
   private cric: CricapiService, private route :RouterService) { 
   }

  ngOnInit(): void {

    if (sessionStorage.getItem('token') == null || sessionStorage.getItem('username') == null) {
      this.route.tologin();
    }
    console.log("Call the Cric Player ApI based on PID to get player stats.");
    this.cric.statsPlayer(sessionStorage.getItem('pId')).subscribe(
      res => {
        this.stat = res['data']
      },
      err => console.log(err)
    )
  }

  viewStatistics()
  {
    var id = sessionStorage.getItem('pId');
    console.log(id);
    const dialogRef = this.dialog.open(PlayerStatisticsComponent, {
      height: '75vh',
      width: '40rem',
       disableClose:true,
      data:id
     })
  }

}
