import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { redirect } from 'next/navigation';

async function ConsolePage() {
  const session = await getServerSession(authOptions);

  if (session === null) {
    redirect('/console/login');
    return;
  }
  return <div>ConsolePage</div>;
}

export default ConsolePage;
