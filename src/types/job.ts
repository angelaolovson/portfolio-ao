export type Job = {
    jobTitle: string;
    company: string;
    date: string;
    jobDescriptions?: string[];
    link?: string;
    linkText?: string;
    isProject?: boolean;
}
