import {
  BeforeCreate,
  Entity,
  OnInit,
  PrimaryKey,
  Property,
  Index,
  Filter,
  OptionalProps,
} from "@mikro-orm/core"

import {
  DALUtils,
  generateEntityId,
  createPsqlIndexStatementHelper,
} from "@medusajs/utils"
import { DAL } from "@medusajs/types"

const inviteEmailIndexName = "IDX_invite_email"
const inviteEmailIndexStatement = createPsqlIndexStatementHelper({
  name: inviteEmailIndexName,
  tableName: "invite",
  columns: "email",
  where: "deleted_at IS NULL",
  unique: true,
})

type OptionalFields =
  | "metadata"
  | "accepted"
  | DAL.SoftDeletableEntityDateColumns
@Entity({ tableName: "invite" })
@Filter(DALUtils.mikroOrmSoftDeletableFilterOptions)
export default class Invite {
  [OptionalProps]: OptionalFields

  @PrimaryKey({ columnType: "text" })
  id: string

  @Index({
    name: inviteEmailIndexName,
    expression: inviteEmailIndexStatement,
  })
  @Property({ columnType: "text" })
  email: string

  @Property({ columnType: "boolean" })
  accepted: boolean = false

  @Property({ columnType: "text" })
  token: string

  @Property({ columnType: "timestamptz" })
  expires_at: Date

  @Property({ columnType: "jsonb", nullable: true })
  metadata: Record<string, unknown> | null

  @Property({
    onCreate: () => new Date(),
    columnType: "timestamptz",
    defaultRaw: "now()",
  })
  created_at: Date

  @Property({
    onCreate: () => new Date(),
    onUpdate: () => new Date(),
    columnType: "timestamptz",
    defaultRaw: "now()",
  })
  updated_at: Date

  @Index({ name: "IDX_invite_deleted_at" })
  @Property({ columnType: "timestamptz", nullable: true })
  deleted_at?: Date

  @OnInit()
  onInit() {
    this.id = generateEntityId(this.id, "invite")
  }

  @BeforeCreate()
  beforeCreate() {
    this.id = generateEntityId(this.id, "invite")
  }
}