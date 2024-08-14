import { Component, OnInit } from '@angular/core';
import { Room } from './room';
import { RoomDetails } from './room';

@Component({
  selector: 'app1-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit{
  

  constructor() { }

  ngOnInit(): void {
    // Initialization logic here
  }

  hotelName = "Rob's";

  numberOfRooms = 10;

  hideRooms = false;

  rooms : Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  }

  roomList : RoomDetails[] = [{
    roomNumber : 1,
    roomType : 'Deluxe',
    amenities: 'A/C',
    price: 500,
    photos: 'string',
    checkinTime: new Date('11-Nov-2024'),
    checkoutTime: new Date('12-Nov-2024'),
  },
  {
    roomNumber : 15,
    roomType : 'Deluxe',
    amenities: 'A/C',
    price: 500,
    photos: 'string',
    checkinTime: new Date('11-Nov-2024'),
    checkoutTime: new Date('12-Nov-2024'),
  }
  ];

  toggle() {
    this.hideRooms = !this.hideRooms;
  }
}
