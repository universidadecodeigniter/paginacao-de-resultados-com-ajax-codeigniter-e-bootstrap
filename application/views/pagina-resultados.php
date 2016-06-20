<?php if($usuarios): ?>
<div class="table-responsive">
  <table class="table table-striped">
    <thead>
      <th>#</th>
      <th>Nome</th>
      <th>Email</th>
    </thead>
    <tbody>
      <?php foreach($usuarios as $usuario): ?>
      <tr>
        <td><?=$usuario->id?></td>
        <td><?=$usuario->nome?></td>
        <td><?=$usuario->email?></td>
      </tr>
    <?php endforeach; ?>
    </tbody>
  </table>
</div>
<?php echo $pagination; ?>
<?php else: ?>
<p class="alert alert-info">Página inexistente</p>
<?php endif; ?>