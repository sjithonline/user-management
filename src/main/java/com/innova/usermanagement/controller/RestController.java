/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package com.innova.usermanagement.controller;

import com.innova.usermanagement.service.UserService;
import com.innova.usermanagement.model.UserInfo;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;
import java.util.logging.Level;
import java.util.logging.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

/**
 *
 * @author DELL
 */
@org.springframework.web.bind.annotation.RestController
@RequestMapping("/")
public class RestController {
    
    @Autowired
    UserService fileService;
    
    @RequestMapping(value = "/users",method = RequestMethod.GET)
    public List<UserInfo> getUsers() throws Exception{
        List<UserInfo> users =new ArrayList<UserInfo>();
        try {
            //Calling a dummy service
            users = fileService.getUsers();
        } catch (Throwable ex) {
            Logger.getLogger(RestController.class.getName()).log(Level.SEVERE, null, ex);
            throw new Exception("Failed to get user list");
        }
        return users;
    }
    
    @RequestMapping(value = "/user",method = RequestMethod.POST)
    public boolean createUser(@RequestBody UserInfo  userInfo) throws Exception{
        boolean flagOut=false;
        try {
            //Calling a dummy service
            flagOut = fileService.createUser(userInfo);
        } catch (Throwable ex) {
            Logger.getLogger(RestController.class.getName()).log(Level.SEVERE, null, ex);
            throw new Exception("Failed to create new user");
        }
        return flagOut;
    }
    
    @RequestMapping(value = "/user",method = RequestMethod.PUT)
    public boolean updateUser(@RequestBody UserInfo  userInfo) throws Exception{
        boolean flagOut=false;
        try {
            //Calling a dummy service
            flagOut = fileService.updateUser(userInfo);
        } catch (Throwable ex) {
            Logger.getLogger(RestController.class.getName()).log(Level.SEVERE, null, ex);
            throw new Exception("Failed to update user details");
        }
        return flagOut;
    }
    
    @RequestMapping(value = "/user",method = RequestMethod.DELETE)
    public boolean deleteUser(@RequestParam("id") Long userId) throws Exception{
        boolean flagOut=false;
        try {
            //Calling a dummy service
            flagOut = fileService.deleteUser(userId);
        } catch (Throwable ex) {
            Logger.getLogger(RestController.class.getName()).log(Level.SEVERE, null, ex);
            throw new Exception("Failed to delete the user");
        }
        return flagOut;
    }
}
