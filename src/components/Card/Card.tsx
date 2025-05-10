import { cn } from '@/utils'

export const Card = ({
    children,
    className,
}: {
    children: React.ReactNode
    className?: string
}) => {
    return (
        <div
            className={cn(
                'shadow-card rounded-3xl px-6 py-4 flex flex-col gap-4',
                className
            )}
        >
            {children}
        </div>
    )
}
