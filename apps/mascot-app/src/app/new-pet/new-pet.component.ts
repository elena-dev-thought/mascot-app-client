import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { PetService } from '../pet.service';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';



import { Pet } from '../models/pet.model';
import { log } from 'util';

@Component({
  selector: 'newPet',
  templateUrl: './new-pet.component.html',
  styleUrls: ['./new-pet.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NewPetComponent implements OnInit {

  orgId: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private petService: PetService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.orgId = params['_id'];
    });
  }

  species = ['Dog', 'Cat'];

  sizes = ['Mini', 'Small', 'Medium', 'Large', 'Extra Large'];

  pet = new Pet();

  addPet() {
    this.pet.organization = this.orgId;
    this.petService.addPet(this.pet)
      .subscribe(res => {
        this.router.navigate(['/pets']);
      });
  }

}
