# Notes

## Data Types

### Node

A special datatype that can be `null`, an `Array`, or an `Object`

Undefined:

```json
{
  "id": "id",
  "type": "node",
  "value": null
}
```

Array

```json
{
  "id": "id",
  "type": "node",
  "value": []
}
```

Object:

```json
{
  "id": "id",
  "type": "node",
  "value": {}
}
```

### Element

An element datatype represent a React component

```json
{
  "id": "id",
  "type": "element",
  "value": {
    "props": {
      "children": {
        "id": "children-id",
        "type": "array",
        "value": []
      }
    }
  }
}
```

### Array

```json
{
  "id": "id",
  "type": "array",
  "value": []
}
```

### Number

```json
{
  "id": "id",
  "type": "number",
  "value": 0
}
```

### String

```json
{
  "id": "id",
  "type": "string",
  "value": "string"
}
```

### Boolean

```json
{
  "id": "id",
  "type": "array",
  "value": false
}
```

## Actions

### Delete

### Update

### Replace

### Append

### Insert

### Find