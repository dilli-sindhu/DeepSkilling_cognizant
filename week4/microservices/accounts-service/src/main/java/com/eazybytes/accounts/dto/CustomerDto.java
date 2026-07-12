package com.eazybytes.accounts.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Pattern;
import lombok.Data;

@Data
@Schema(name = "Customer", description = "Schema to hold customer and account information")
public class CustomerDto {

    @NotEmpty(message = "Name cannot be a null or empty value")
    @Schema(description = "Name of the customer", example = "Jane Doe")
    private String name;

    @NotEmpty(message = "Email address cannot be a null or empty value")
    @Email(message = "Email address should be a valid value")
    @Schema(description = "Email address of the customer", example = "jane.doe@example.com")
    private String email;

    @Pattern(regexp = "(^$|[0-9]{10})", message = "Mobile number must be 10 digits")
    @Schema(description = "Mobile number of the customer", example = "9876543210")
    private String mobileNumber;

    @Schema(description = "Account details of the customer")
    private AccountsDto accountsDto;

}
