import {
  createParamDecorator,
  ExecutionContext,
} from '@nestjs/common';

export const GetCurrentUserById = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    // console.log(request.isAuthenticated());
    // console.log(request.user?.sub)
    return request.user?.sub;
  },
);
