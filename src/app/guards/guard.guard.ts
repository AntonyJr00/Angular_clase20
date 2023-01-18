import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GuardGuard implements CanActivate {
  canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.hasUser()) {
      return true;
    }
    alert('Introduzca el nombre clave');
    return false;
  }
  hasUser(): boolean {
    const alucard = localStorage.getItem('token');
    if (alucard === 'antony') {
      return true;
    } else {
      return false;
    }
  }
}
