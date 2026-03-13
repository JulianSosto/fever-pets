import { Component, OnInit } from '@angular/core';
import { PetsService } from '../../../../core/services/pets.service';
import { Pet } from '../../../../core/models/pet.model';
import { CommonModule } from '@angular/common';
import { PetCard } from '../../components/pet-card/pet-card';

@Component({
  selector: 'app-pets-list',
  standalone: true,
  imports: [CommonModule, PetCard],
  templateUrl: './pets-list.html',
  styleUrls: ['./pets-list.scss']
})
export class PetsList implements OnInit {

  pets: Pet[] = [];

  constructor(private petsService: PetsService) {}

  ngOnInit(): void {
    this.petsService.getPets().subscribe(data => {
      this.pets = data;
    });
  }

}