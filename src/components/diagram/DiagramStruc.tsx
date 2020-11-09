export interface DiagramItem {
    desc: string;
    value: number;
    totalLeads: number;
    color: string;
    id: number;
}

export interface DiagramsList {
    diagramItems: DiagramItem[];
    diagramColor: string;
    totalLeads: number;
}