package com.eazybytes.accounts.service;

import com.eazybytes.accounts.dto.CustomerDto;

public interface IAccountsService {

    /**
     * Create a new account for a customer
     */
    void createAccount(CustomerDto customerDto);

    /**
     * Fetch account details by mobile number
     */
    CustomerDto fetchAccount(String mobileNumber);

    /**
     * Update account details
     * @return true if update was successful
     */
    boolean updateAccount(CustomerDto customerDto);

    /**
     * Delete account by mobile number
     * @return true if deletion was successful
     */
    boolean deleteAccount(String mobileNumber);

}
