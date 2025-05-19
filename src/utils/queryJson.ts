export default function queryJson<T = any>(field: string, json: any): T | undefined {
  if( !json ) {
    return undefined;
  }

  const split: string[] = field.split(".");
  let target = json;

  for( let subField of split ) {
    target = target[subField];

    if( !target ) {
      return undefined; 
    }
  }

  return target;
}
