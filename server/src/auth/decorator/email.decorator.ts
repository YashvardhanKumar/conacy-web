import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const USERS = createParamDecorator(
  (_data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return request.users; // extract token from request
  },
);
