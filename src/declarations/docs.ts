

export interface JsonDocs {
  components: JsonDocsComponent[];
}


export interface JsonDocsComponent {
  tag?: string;
  readme?: string;
  docs?: string,
  usage?: JsonDocsUsage;
  props?: JsonDocsProp[];
  methods?: JsonDocsMethod[];
  events?: JsonDocsEvent[];
  styles?: JsonDocsStyle[];
}


export interface JsonDocsUsage {
  [key: string]: string;
}


export interface JsonDocsProp {
  name?: string;
  type?: string;
  mutable?: boolean;
  attr?: string;
  reflectToAttr?: boolean;
  docs?: string;
}


export interface JsonDocsMethod {
  name: string;
  docs?: string;
}


export interface JsonDocsEvent {
  event: string;
  bubbles?: boolean;
  cancelable?: boolean;
  composed?: boolean;
  docs?: string;
}


export interface JsonDocsStyle {
  name: string;
  docs?: string;
  annotation?: string;
}
