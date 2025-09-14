# spacesAtFanpit
Find, Book, Celebrate.

### Changelog
`14:09:2026`
### added
- login screen without auth integration.
- Authentication with token generation using nest.

#### feature-branches
`www`
- [x] login screen 

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
- [x] mongoDB collection for storing user-credentials ( email, password (hashed)),
- [ ] Routes: Authorisation
   - `/client` - Browse spaces, sign-up/loing, see real-time availability, place reservations, pay via Razorpay, view/cancel bookings. 
   - `/staff` - View daily reservations list, scan/enter booking code, mark guests, checked-in/out, flag issues 
   - `/admin` - CRUD own spaces, upload images, configure pricing rules, view/filter reservations, mark no-shows, basic analytics.
- [x] Token generation ( Refresh, and session tokens )

```mermaid
graph LR
    A["`Routes`"] --> B["`/auth`"]
    B --> a["`signup`"]
    B --> b["`login`"]
    A --> C["`/user`"]
    C --> e["`/staff : protected route`"]
    C --> f["`/admin : protected route`"]
    C --> g["`/client : default route`"]
```
#### Planned:
- [ ] Razorpay integration
- [ ] Seeding DB with sample spaces for retreiving
- [ ] Admin UI for CRUD of Spaces, time.
- [ ] Booking page for client.
- [ ] service page for staff.

