import { FieldError } from "../generated/graphql";

export const toErrorMap = (errors: FieldError[]): Record<string, string> =>
  errors.reduce<Record<string, string>>(
    (acc, { field, message }) => (acc = { [field]: message, ...acc }),
    {}
  );
