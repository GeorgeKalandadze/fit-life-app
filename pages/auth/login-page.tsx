import { LoginForm } from '@/features/auth/ui/login-form';
import { AuthShell } from '@/shared/ui/auth-shell';
import { AppText } from '@/shared/ui/app-text';

export function LoginPage() {
  return (
    <AuthShell
      description="A calm, modern training space built around consistency. Sign in to continue your workout plans and progress."
      eyebrow="Fit Life"
      title="Train with clean focus.">
      <AppText variant="headline" className="mb-2">
        Welcome back
      </AppText>
      <AppText variant="muted" className="mb-6">
        Your routines, recovery, and weekly structure stay in one place.
      </AppText>
      <LoginForm />
    </AuthShell>
  );
}
