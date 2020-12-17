import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActivityModel } from 'src/app/ActivityModel';
import { ActivityService } from '../../../services/activity-service/activity-service.service';
import { Location } from '@angular/common';
/// <reference types="@types/googlemaps"/>
@Component({
  selector: 'app-details-activity',
  templateUrl: './details-activity.component.html',
  styleUrls: ['./details-activity.component.scss']
})
export class DetailsActivityComponent implements OnInit, AfterViewInit {

  title='angular-gmap'
  @ViewChild('map', { static: false}) gmap: ElementRef;
  public activity: ActivityModel;
  public map: google.maps.Map;
  public coordinates: google.maps.LatLng;
  public mapOptions: google.maps.MapOptions;
  public marker: google.maps.Marker;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private _location: Location,
    private activityService: ActivityService
    ) { }

  

  private getActivityById(id: number) {
      this.activityService.getActivityById(id)
        .subscribe(data => {
          this.activity = data;
        });
  }


  ngOnInit() {
    let id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    this.getActivityById(id);
  }



  ngAfterViewInit() {
    this.coordinates = new google.maps.LatLng(this.activity.latitude, this.activity.longitude);
    console.log(this.activity.latitude)
    console.log(this.activity.longitude)
    this.mapOptions = {
      center: this.coordinates,
      zoom: 8,
    };
    this.marker = new google.maps.Marker({
      position: this.coordinates,
      map: this.map,
    });
    this.mapInitializer();
  }



  mapInitializer() {
    this.map = new google.maps.Map(this.gmap.nativeElement, this.mapOptions);
    this.marker.setMap(this.map);
  }

  public updateActivity(activity) {
    this.router.navigate(['activity/edit', activity.id]);
  }

  public deleteActivity(activity) {
    this.activityService.deleteActivity(activity.id)
      .subscribe(data => {
        console.log("Deleted" + data);
        this._location.back();
      },
      error => console.log(error));
  }

}
