import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { Userinfo } from '../Store/Model/User.model';

export const authGuard: CanActivateFn = (route, state) => {
  const service = inject(UserService)
  const router = inject(Router)
  let menuname = '';
   
  if(route.url.length>0){
    menuname=route.url[0].path;
  }
   
  const userinfo: Userinfo = service.Getuserdatafromstorage();
  if (userinfo.username != '' && userinfo.username != null) {
    if (menuname != '') {
      service.HaveMenuAccess(userinfo.role, menuname).subscribe(item => {
        const _menudata = item;
        console.log(_menudata);
        if (_menudata.length > 0) {
          return true
        } else {
          alert('Unautorized access.')
          router.navigate(['']);
          return false;
        }
      })
    } else {
      return true;
    }

    return true;
  } else {
    router.navigate(['login']);
    return false;
  }
};
