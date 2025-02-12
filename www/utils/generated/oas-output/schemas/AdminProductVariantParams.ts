/**
 * @schema AdminProductVariantParams
 * type: object
 * description: The product's variants.
 * x-schemaName: AdminProductVariantParams
 * properties:
 *   q:
 *     type: string
 *     title: q
 *     description: The variant's q.
 *   id:
 *     oneOf:
 *       - type: string
 *         title: id
 *         description: The variant's ID.
 *       - type: array
 *         description: The variant's ID.
 *         items:
 *           type: string
 *           title: id
 *           description: The id's ID.
 *   sku:
 *     oneOf:
 *       - type: string
 *         title: sku
 *         description: The variant's sku.
 *       - type: array
 *         description: The variant's sku.
 *         items:
 *           type: string
 *           title: sku
 *           description: The sku's details.
 *   product_id:
 *     oneOf:
 *       - type: string
 *         title: product_id
 *         description: The variant's product id.
 *       - type: array
 *         description: The variant's product id.
 *         items:
 *           type: string
 *           title: product_id
 *           description: The product id's details.
 *   options:
 *     type: object
 *     description: The variant's options.
 *   limit:
 *     type: number
 *     title: limit
 *     description: The variant's limit.
 *   offset:
 *     type: number
 *     title: offset
 *     description: The variant's offset.
 *   order:
 *     type: string
 *     title: order
 *     description: The variant's order.
 *   fields:
 *     type: string
 *     title: fields
 *     description: The variant's fields.
 *   $and:
 *     type: array
 *     description: The variant's $and.
 *     items:
 *       type: array
 *       description: The $and's details.
 *       items:
 *         type: object
 *       title: $and
 *   $or:
 *     type: array
 *     description: The variant's $or.
 *     items:
 *       type: array
 *       description: The $or's details.
 *       items:
 *         type: object
 *       title: $or
 * 
*/

