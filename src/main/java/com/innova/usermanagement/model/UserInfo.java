/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package com.innova.usermanagement.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.util.List;

/**
 *
 * @author Sreejith
 */

@JsonIgnoreProperties(ignoreUnknown=true)
public class UserInfo {
    private Long id;
    private String firstName;
    private String lastName;
    private String email;
    private Long phone;
    private Long zipCode;
    private List<String> liveVideoApps;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    
    public List<String> getLiveVideoApps() {
        return liveVideoApps;
    }

    public void setLiveVideoApps(List<String> liveVideoApps) {
        this.liveVideoApps = liveVideoApps;
    }

    public Long getPhone() {
        return phone;
    }

    public void setPhone(Long phone) {
        this.phone = phone;
    }

    public Long getZipCode() {
        return zipCode;
    }

    public void setZipCode(Long zipCode) {
        this.zipCode = zipCode;
    }
    
    
}
