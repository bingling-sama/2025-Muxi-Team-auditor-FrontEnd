'use client';

import * as React from 'react';
import * as SwitchPrimitives from '@radix-ui/react-switch';

import { cn } from '@/utils/style';

const LargeToggle = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => {
  const [checked, setChecked] = React.useState(false);

  return (
    <SwitchPrimitives.Root
      className={cn(
        'peer inline-flex h-6 w-20 shrink-0 cursor-pointer items-center rounded-lg shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-[#F4B087] data-[state=unchecked]:bg-[#EFD5BD]',
        className
      )}
      checked={checked}
      onCheckedChange={(c) => setChecked(c)}
      {...props}
      ref={ref}
    >
      <SwitchPrimitives.Thumb
        className={cn(
          'absolute z-20 inline-flex items-center justify-center pointer-events-none h-6 w-8 rounded-lg shadow-lg ring-0 text-xs font-bold transition-transform data-[state=checked]:translate-x-12 data-[state=checked]:bg-[#F85231] data-[state=checked]:text-white data-[state=unchecked]:translate-x-0 data-[state=unchecked]:bg-[#FFBB3E] data-[state=unchecked]:text-[#834D0B]'
        )}
      >
        {checked ? 'ON' : 'OFF'}
      </SwitchPrimitives.Thumb>
      <SwitchPrimitives.Thumb
        className={cn(
          'absolute z-0 inline-flex items-center justify-center pointer-events-none h-6 w-12 ring-0 text-[0.6rem] font-bold transition-transform data-[state=checked]:translate-x-0 data-[state=checked]:text-[#EA5454] data-[state=unchecked]:translate-x-8 data-[state=unchecked]:text-[#B59774]'
        )}
      >
        狂暴模式
      </SwitchPrimitives.Thumb>
    </SwitchPrimitives.Root>
  );
});
LargeToggle.displayName = SwitchPrimitives.Root.displayName;

const SmallToggle = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => {
  const [checked, setChecked] = React.useState(false);
  return (
    <SwitchPrimitives.Root
      className={cn(
        'peer inline-flex h-7 w-7 shrink-0 cursor-pointer items-center rounded-lg shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-[#F85231] data-[state=unchecked]:bg-[#FFBB3E]',
        className
      )}
      checked={checked}
      onCheckedChange={(c) => setChecked(c)}
      {...props}
      ref={ref}
    >
      <SwitchPrimitives.Thumb
        className={cn(
          'inline-flex items-center justify-center pointer-events-none h-7 w-7 ring-0 text-[0.7rem] font-bold transition-transform data-[state=checked]:text-white data-[state=unchecked]:text-[#834D0B]'
        )}
      >
        {checked ? 'ON' : 'OFF'}
      </SwitchPrimitives.Thumb>
    </SwitchPrimitives.Root>
  );
});
SmallToggle.displayName = SwitchPrimitives.Root.displayName;

export { LargeToggle, SmallToggle };