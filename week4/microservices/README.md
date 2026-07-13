# Accounts & Loans Microservices (Spring Boot 3 + Spring Cloud ready)

Two independent Spring Boot 3 microservices, each with its own database, entities, DTOs,
service layer, exception handling, and REST controller.



```
microservices/
├── accounts-service/   → runs on port 8080
└── loans-service/      → runs on port 8090
```

## Requirements
- Java 17+
- Maven 3.8+
- (Optional) MySQL, if you don't want to use the built-in H2 in-memory DB

## Running each service

```bash
cd accounts-service
mvn spring-boot:run
```

```bash
cd loans-service
mvn spring-boot:run
```

Each service uses H2 in-memory DB by default (tables auto-created on startup).
H2 console: `http://localhost:8080/h2-console` (accounts) and `http://localhost:8090/h2-console` (loans)
JDBC URL: `jdbc:h2:mem:accountsdb` / `jdbc:h2:mem:loansdb`, user `sa`, blank password.

To use MySQL instead, edit `application.yml` in each service (the MySQL block is
already there, commented out) and add your DB credentials.

Swagger UI (API docs) is available at:
- Accounts: `http://localhost:8080/swagger-ui.html`
- Loans: `http://localhost:8090/swagger-ui.html`

## Accounts Service API — `/api/v1/accounts`

| Method | Endpoint                        | Description                          |
|--------|----------------------------------|---------------------------------------|
| POST   | `/api/v1/accounts`               | Create a customer + savings account   |
| GET    | `/api/v1/accounts/{mobileNumber}`| Fetch account & customer details      |
| PUT    | `/api/v1/accounts`                | Update account & customer details     |
| DELETE | `/api/v1/accounts/{mobileNumber}`| Delete customer & account             |

Example — create account:
```bash
curl -X POST http://localhost:8080/api/v1/accounts \
  -H "Content-Type: application/json" \
  -d '{
        "name": "Jane Doe",
        "email": "jane.doe@example.com",
        "mobileNumber": "9876543210"
      }'
```

Example — fetch account:
```bash
curl http://localhost:8080/api/v1/accounts/9876543210
```

## Loans Service API — `/api/v1/loans`

| Method | Endpoint                     | Description                        |
|--------|-------------------------------|-------------------------------------|
| POST   | `/api/v1/loans?mobileNumber=` | Create a new home loan for a number |
| GET    | `/api/v1/loans/{mobileNumber}`| Fetch loan details                  |
| PUT    | `/api/v1/loans`                | Update loan details                 |
| DELETE | `/api/v1/loans/{mobileNumber}`| Delete a loan                       |

Example — create loan:
```bash
curl -X POST "http://localhost:8090/api/v1/loans?mobileNumber=9876543210"
```

Example — fetch loan:
```bash
curl http://localhost:8090/api/v1/loans/9876543210
```

## Design notes
- Each service is independently deployable with its own DB schema — a core
  microservices principle (database-per-service).
- Validation is done via Jakarta Bean Validation (`@Valid`, `@NotEmpty`, `@Pattern`, etc.)
- A `@RestControllerAdvice` global exception handler returns consistent JSON error bodies.
- Audit columns (`createdAt`, `createdBy`, `updatedAt`, `updatedBy`) are handled automatically
  via Spring Data JPA auditing.
- Both services are structured so they can later be registered with **Eureka** (service
  discovery), routed through **Spring Cloud Gateway** (API gateway), and configured
  centrally via **Spring Cloud Config** — natural next steps once you want to wire the
  full microservices ecosystem together.

## Suggested next steps
1. Add a **Eureka Server** module and add `spring-cloud-starter-netflix-eureka-client`
   to both services so they register themselves.
2. Add a **Spring Cloud Gateway** module to route `/accounts/**` and `/loans/**` to the
   right service.
3. Add **Resilience4j** for circuit breakers between services (e.g. if accounts needs to
   call loans).
4. Containerize each service with its own `Dockerfile` and orchestrate with
   `docker-compose` or Kubernetes.
