import { createParamDecorator, ExecutionContext } from '@nestjs/common';

const UserEmail = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return request.user;
  },
);

export { UserEmail };
