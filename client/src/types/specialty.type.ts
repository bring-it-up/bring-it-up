export type Specialty = {
    id: string;
    label: string;
};

export type Specialties = {
    [id: string]: Specialty;
};