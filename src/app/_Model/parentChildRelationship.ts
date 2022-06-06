export class ParentChildRelationship {
  relationshipId: number
  targetIsChildOrParent: 'child' | 'parent'
  targetId : number
  relationshipType: string = ''
  relationshipStatus: string = ''

  constructor(relatinshipId: number, targetIsChildOrParent: 'child' | 'parent', targetId: number ) {
    this.relationshipId = relatinshipId
    this.targetIsChildOrParent = targetIsChildOrParent
    this.targetId = targetId
  }
}
