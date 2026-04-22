import { RegisterForm } from '@/features/auth/ui/register-form';
import { AuthShell } from '@/shared/ui/auth-shell';
import { AppText } from '@/shared/ui/app-text';

export function RegisterPage() {
  return (
    <AuthShell
      description="Create a focused training account with a clear routine, cleaner progress tracking, and a stronger baseline."
      eyebrow="Start Strong"
      title="Build a durable routine.">
      <AppText variant="headline" className="mb-2">
        Create your account
      </AppText>
      <AppText variant="muted" className="mb-6">
        Set up your space and move straight into a greener, calmer training flow.
      </AppText>
      <RegisterForm />
    </AuthShell>
  );
}
