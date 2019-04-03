import { Component, OnInit } from '@angular/core';
import { ModalService } from '../_service';
import { Routes, RouterModule } from '@angular/router';
@Component({ templateUrl: 'home.component.html' })
export class HomeComponent implements OnInit {
    
    private bodyText: string;
    constructor(private modalService: ModalService) {
    }
    ngOnInit() {
        debugger;
        this.bodyText = 'This text can be updated in modal 1';
    }
    openModal(id: string) {
        this.modalService.open(id);
    }
    closeModal(id: string) {
        this.modalService.close(id);
    }
}