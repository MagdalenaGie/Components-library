export interface NavbarProps {
    logoPath?: string,
    label?: string,
    linkLabels:Array<NavbarLink>
}

export interface NavbarLink{
    label: string,
    linkTo: string
    requireAuth: boolean
}