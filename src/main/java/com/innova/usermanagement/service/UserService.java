/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package com.innova.usermanagement.service;

import com.innova.usermanagement.model.UserInfo;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.springframework.scheduling.annotation.Async;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.stereotype.Service;

/**
 *
 * @author DELL
 */

@Service
public class UserService {
    
    public List<UserInfo> getUsers() throws  Exception{
        List<UserInfo> users =new ArrayList();
        
        //Adding one user
        UserInfo user =new UserInfo();
        user.setId(1L);
        user.setFirstName("Sreejith");
        user.setLastName("PS");
        user.setEmail("sjithonline@gmail.com");
        user.setPhone(9916556976L);
        user.setZipCode(603102L);
        
        String[] array = {"Facebook","Youtube","Twitter"};
        List<String> liveVideoApps = Arrays.asList(array);
        
        user.setLiveVideoApps(liveVideoApps);
        users.add(user);
        
        return users;        
    }
    public boolean createUser(UserInfo userInfo) throws  Exception{
        //Call DAO methods to create user here
        System.out.println("==================");
        System.out.println("Called Create Method");
        System.out.println("==================");
        return true;
    }
    
    public boolean updateUser(UserInfo userInfo) throws  Exception{
        //Call DAO methods to update user here
        System.out.println("==================");
        System.out.println("Called Update Method");
        System.out.println("==================");
        return true;
    }
    
    public boolean deleteUser(Long userId) throws  Exception{
        System.out.println("==================");
        System.out.println("Called Delete Method");
        System.out.println("==================");
        return true;
    }
    
    public boolean getUserDetails(Long userId) throws  Exception{
        System.out.println("==================");
        System.out.println("Called getUser Method");
        System.out.println("==================");
        return true;
    }

}
