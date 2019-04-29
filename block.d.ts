export interface BlockPlugin {
  // plugin id
  id: string
  // block component
  block: any
  // inspector component
  inspector: any

  // display icon
  icon: string
  // display name
  displayName: string

  //
  createDefaults(): any
}
