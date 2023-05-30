namespace Entity {
  interface CommonFields {
    id: number;
    created_at: number;
    updated_at: number;
    deleted_at?: number | null;
  }
}
