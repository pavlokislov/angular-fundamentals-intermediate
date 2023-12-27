import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../login/auth.service';
import {Router} from '@angular/router';
import {Toastr, TOASTR_TOKEN} from '../../common/toastr.service';


@Component({
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  private firstName;
  private lastName;

  constructor(private authService: AuthService,
              private route: Router,
              @Inject(TOASTR_TOKEN) private toastr: Toastr) {
  }

  ngOnInit(): void {
    this.firstName =
      new FormControl(this.authService.currentUser.firstName, [Validators.required, Validators.pattern('[a-zA-z]*')]);
    this.lastName =
      new FormControl(this.authService.currentUser.lastName, Validators.required);
    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    });
  }

  validateFirstName(): boolean {
    return this.firstName.valid || this.firstName.untouched;
  }

  validateLastName(): boolean {
    return this.lastName.valid || this.lastName.untouched;
  }

  cancel() {
    this.route.navigate(['events']);
  }

  logout() {
    this.authService.logout().subscribe(() => {
      this.route.navigate(['/user/login']);
    });
  }

  saveProfile(formValues) {
    if (this.profileForm.valid) {
      this.authService.updateCurrentUser(formValues.firstName, formValues.lastName)
        .subscribe(() => {
          this.toastr.success('Profile saved');
        });
    }
  }

}
