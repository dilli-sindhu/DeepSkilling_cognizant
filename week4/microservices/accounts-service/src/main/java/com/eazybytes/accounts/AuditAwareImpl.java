package com.eazybytes.accounts;

import org.springframework.data.domain.AuditorAware;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component("auditAwareImpl")
public class AuditAwareImpl implements AuditorAware<String> {

    @Override
    public Optional<String> getCurrentAuditor() {
        // In a real system, pull this from the security context (e.g. logged-in user)
        return Optional.of("ACCOUNTS_MS");
    }

}
