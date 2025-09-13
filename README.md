# spacesAtFanpit
Find, Book, Celebrate.

#### feature-branches
`www`
- [ ] login screen 

`nest`
- [ ] 
## Timeline
### Checkpoint 1( deliverables ): Project setup, Authentication & Integration.
#### Setup:
- [x] `www` ( source package for Frontend ), 
- [x] `nest` for backend,
   - Containerised `nest` application for auth handling (JWT), DB (MongoDB) connection 
- [x] containers for MongoDB (`local testing`), and MongoDB Atlas (`Hosted`).
- [ ] `zustand` for state-management.
- [ ] `React-hook-form` for form validation, `zod` for type validation.
#### Authentication
- [ ] mongoDB collection for storing user-credentials ( email, password (hashed)),
- [ ] Routes: Authorisation
   - `/client` - Browse spaces, sign-up/loing, see real-time availability, place reservations, pay via Razorpay, view/cancel bookings. 
   - `/staff` - View daily reservations list, scan/enter booking code, mark guests, checked-in/out, flag issues 
   - `/admin` - CRUD own spaces, upload images, configure pricing rules, view/filter reservations, mark no-shows, basic analytics.
- [ ] Token generation ( Refresh, and session tokens )
- 

```mermaid
graph LR
    A["`Routes`"] --> B["`/client`"]
    A --> C["`/staff`"]
    A --> D["`/admin`"]
```
#### Planned:
- [ ] Razorpay integration
- [ ] 

