package com.eazybytes.accounts.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
@Schema(name = "Accounts", description = "Schema to hold account information")
public class AccountsDto {

    @NotNull(message = "Account number cannot be null")
    @Schema(description = "Account number", example = "3454433243")
    private Long accountNumber;

    @NotEmpty(message = "Account type cannot be null or empty")
    @Schema(description = "Account type", example = "Savings")
    private String accountType;

    @NotEmpty(message = "Branch address cannot be null or empty")
    @Schema(description = "Branch address", example = "123 Main Street, New York")
    private String branchAddress;

}
