import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';

const client = createClient({ url: 'DATABASE_URL', authToken: 'DATABASE_AUTH_TOKEN' });

const db = drizzle(client);

