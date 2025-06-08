import { APP_NAME } from '@/lib/constants';

export function KingsukhLogo() {
  return (
    <span className="font-heading text-primary text-2xl md:text-3xl tracking-tight">
      {APP_NAME.split(' ')[0]} <span className="text-foreground/80">{APP_NAME.split(' ').slice(1).join(' ')}</span>
    </span>
  );
}
