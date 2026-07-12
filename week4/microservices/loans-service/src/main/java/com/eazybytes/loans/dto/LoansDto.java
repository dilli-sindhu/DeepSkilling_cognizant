package com.eazybytes.loans.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import lombok.Data;

@Data
@Schema(name = "Loans", description = "Schema to hold loan information")
public class LoansDto {

    @NotEmpty(message = "Mobile number cannot be null or empty")
    @Pattern(regexp = "(^$|[0-9]{10})", message = "Mobile number must be 10 digits")
    @Schema(description = "Mobile number of the customer", example = "9876543210")
    private String mobileNumber;

    @NotEmpty(message = "Loan number cannot be null or empty")
    @Schema(description = "Loan number", example = "988712345678")
    private String loanNumber;

    @NotEmpty(message = "Loan type cannot be null or empty")
    @Schema(description = "Type of loan", example = "Home Loan")
    private String loanType;

    @NotNull(message = "Total loan amount cannot be null")
    @Schema(description = "Total loan amount", example = "100000")
    private Integer totalLoan;

    @NotNull(message = "Amount paid cannot be null")
    @Schema(description = "Amount paid so far", example = "0")
    private Integer amountPaid;

    @NotNull(message = "Outstanding amount cannot be null")
    @Schema(description = "Outstanding amount", example = "100000")
    private Integer outstandingAmount;

}
