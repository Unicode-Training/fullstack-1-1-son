# Endpoint

1. GET /admin/roles
2. POST /admin/roles
3. PUT /admin/roles/:roleId/permissions
   Body:
   ['products:create', 'products:list', 'product:update']

4. PUT /admin/roles/:roleId/users
   Body:
   [1,2,3]
