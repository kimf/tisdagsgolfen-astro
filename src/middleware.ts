import { getActionContext } from 'astro:actions';
import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware((context, next) => {
  const userId = context.session?.get('userId');
  const { action } = getActionContext(context);

  // Check if the action was called from a client-side function
  if (action?.calledFrom === 'rpc') {
    if (userId) {
      return next();
    }
  }

  // If this is a regular request, continue
  if (!context.request.url.includes('/api')) {
    return next();
  }

  if (!userId) {
    return new Response(null, { status: 401 });
  }

  return next();
});

// export const onRequest = sequence(validation, auth, greeting);
