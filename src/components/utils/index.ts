import clsx, { ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const mergeClasses = (...classes: ClassValue[]) => twMerge(clsx(classes))
