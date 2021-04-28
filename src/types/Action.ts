export interface ObjectLiteral {
  [key: string]: any;
}

export type MetaType = {
  setErrors: (errors: ObjectLiteral) => void;
  [key: string]: any;
};

export type ActionPayloadType = {
  values: ObjectLiteral;
  meta: MetaType;
  [key: string]: any;
};

export interface ActionType {
  type: string;
  payload: ActionPayloadType;
}
