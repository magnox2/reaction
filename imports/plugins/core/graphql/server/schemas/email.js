export const typeDefs = `
  # A string email address
  scalar Email

  # A confirmable email record
  type EmailRecord {
    provides: String

    # The actual email address
    address: Email

    # Has this address been verified?
    verified: Boolean
  }
`;
