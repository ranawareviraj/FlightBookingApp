import {Injectable} from '@angular/core';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private fireBaseAuth = getAuth();

  constructor() {
  }

  login(username: string, password: string): Promise<boolean> {
    return signInWithEmailAndPassword(this.fireBaseAuth, username, password)
      .then((response: any) => {
        username = response.user.email;
        console.log(response);
        console.log(response.user.refreshToken);
        localStorage.setItem('token', response.user.refreshToken);
        localStorage.setItem('username', username);
        return true;
      })
      .catch((error: any) => {
        console.log(error);
        return false;
      });
  }

  signup(username: string, password: string): Promise<boolean> {
    return signInWithEmailAndPassword(this.fireBaseAuth, username, password)
      .then((response: any) => {
        username = response.user.email;
        console.log(response);

        localStorage.setItem('token', response.user.refreshToken);
        return true;
      })
      .catch((error: any) => {
        console.log(error);
        return false;
      });
  }

  isAuthenticated(): boolean {
    return localStorage.getItem('token') !== null;
  }

  logout(): void {
    localStorage.removeItem('token');
  }

  getUsername(): string {
    return localStorage.getItem('username') || '';
  }
}
